"use client"
import React, { useState, useEffect } from 'react';
import { Send, User, Bot, Trash, History, Search, Plus, Settings, Calendar, Star, Clock, Menu, X, Filter } from 'lucide-react';

const ChatInterface = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [starredChats, setStarredChats] = useState([]);

  // Initialize data from localStorage
  useEffect(() => {
    const savedConversations = localStorage.getItem('chatConversations');
    const savedStarred = localStorage.getItem('starredChats');
    
    if (savedConversations) {
      const parsed = JSON.parse(savedConversations);
      setConversations(parsed);
      if (parsed.length > 0 && !currentChatId) {
        setCurrentChatId(parsed[0].id);
        setMessages(parsed[0].messages);
      }
    }
    
    if (savedStarred) {
      setStarredChats(JSON.parse(savedStarred));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('chatConversations', JSON.stringify(conversations));
    localStorage.setItem('starredChats', JSON.stringify(starredChats));
  }, [conversations, starredChats]);

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: `Chat ${conversations.length + 1}`,
      messages: [{ role: 'assistant', content: 'Hello! How can I help you today?' }],
      timestamp: new Date().toISOString(),
      category: 'general'
    };
    
    setConversations([newChat, ...conversations]);
    setCurrentChatId(newChat.id);
    setMessages(newChat.messages);
  };

  const toggleStar = (chatId) => {
    if (starredChats.includes(chatId)) {
      setStarredChats(starredChats.filter(id => id !== chatId));
    } else {
      setStarredChats([...starredChats, chatId]);
    }
  };

  const filteredConversations = conversations.filter(chat => {
    const matchesSearch = chat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chat.messages.some(msg => msg.content.toLowerCase().includes(searchTerm.toLowerCase()));
    
    switch (activeFilter) {
      case 'starred':
        return starredChats.includes(chat.id) && matchesSearch;
      case 'recent':
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        return new Date(chat.timestamp) > lastWeek && matchesSearch;
      default:
        return matchesSearch;
    }
  });

  const NavigationBar = () => (
    <div className="bg-gray-800 w-16 flex flex-col items-center py-4 text-gray-400">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-3 hover:bg-gray-700 rounded-lg mb-4"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      <button
        onClick={createNewChat}
        className="p-3 hover:bg-gray-700 rounded-lg mb-6"
      >
        <Plus className="w-6 h-6" />
      </button>

      <div className="space-y-4">
        <button
          onClick={() => setActiveFilter('all')}
          className={`p-3 rounded-lg hover:bg-gray-700 ${activeFilter === 'all' ? 'text-blue-400' : ''}`}
        >
          <History className="w-6 h-6" />
        </button>
        <button
          onClick={() => setActiveFilter('starred')}
          className={`p-3 rounded-lg hover:bg-gray-700 ${activeFilter === 'starred' ? 'text-blue-400' : ''}`}
        >
          <Star className="w-6 h-6" />
        </button>
        <button
          onClick={() => setActiveFilter('recent')}
          className={`p-3 rounded-lg hover:bg-gray-700 ${activeFilter === 'recent' ? 'text-blue-400' : ''}`}
        >
          <Clock className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-auto">
        <button className="p-3 hover:bg-gray-700 rounded-lg">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden flex flex-col`}>
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map(chat => (
          <div
            key={chat.id}
            className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${
              chat.id === currentChatId ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div 
                className="flex-1 cursor-pointer"
                onClick={() => {
                  setCurrentChatId(chat.id);
                  setMessages(chat.messages);
                }}
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm truncate">{chat.title}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStar(chat.id);
                    }}
                    className={`p-1 hover:text-yellow-500 ${
                      starredChats.includes(chat.id) ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                  >
                    <Star className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(chat.timestamp).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  const newConversations = conversations.filter(c => c.id !== chat.id);
                  setConversations(newConversations);
                  if (chat.id === currentChatId) {
                    if (newConversations.length > 0) {
                      setCurrentChatId(newConversations[0].id);
                      setMessages(newConversations[0].messages);
                    } else {
                      setCurrentChatId(null);
                      setMessages([]);
                    }
                  }
                }}
                className="p-1 hover:text-red-500 transition-colors ml-2"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <NavigationBar />
      <Sidebar />
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              {currentChatId 
                ? conversations.find(c => c.id === currentChatId)?.title 
                : 'New Chat'}
            </h1>
            {currentChatId && (
              <button
                onClick={() => toggleStar(currentChatId)}
                className={`p-2 rounded-lg ${
                  starredChats.includes(currentChatId)
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                <Star className="w-5 h-5" />
              </button>
            )}
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 ${
                message.role === 'user' ? 'justify-end' : ''
              }`}
            >
              {message.role === 'assistant' && (
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`max-w-xl p-4 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Form */}
        <div className="border-t border-gray-200 bg-white p-4">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) {
                const newMessage = { role: 'user', content: input };
                const updatedMessages = [...messages, newMessage];
                setMessages(updatedMessages);
                
                const updatedConversations = conversations.map(conv => 
                  conv.id === currentChatId 
                    ? { ...conv, messages: updatedMessages }
                    : conv
                );
                
                setConversations(updatedConversations);
                setInput('');
              }
            }}
            className="max-w-4xl mx-auto relative"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;