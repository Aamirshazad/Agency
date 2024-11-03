export default function Navigation(){
  
    return (
      <div >
        <nav className="bg-blue-950 flex " >
          <div className=" flex relative w-[1080px] mx-auto h-auto py-2   text-white text-lg space-x-7 items-center  ">
            <a href="src/app/page.tsx">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAkFBMVEX///8CQR319PQAPBX49/cAOQ39/Pzo5+Y/a1AAQBl4int6i37q6uiTpJcAPxoANAAAKQDi6eUAMQDg3920vLQ3ZkoALADQ2NNDalJ/mIiKnY8VSCdcemeLpZZegGsAQxiitKm2xr0YUTDD0MgqWDusvbRviXh1lIJMc1pni3U3X0XY491CYkyWrJ8qYEIAOQCot0tBAAACDklEQVRoge2YXXejIBCGRxG27CYgbhOkfsTENHWbZvv//92K2bQSTVMx9vSC93KY85xxBmYQACcnJyenrxLxJxOB4PfsIz38tNZ9Df/x4YctOLYUn1+DkzvkWYo6uIM7uIMPhSOWTAVnPM1yOg0crwqh8DSR81SA4q3vuCGc5z6so5Zh018WGziu4/bjlhWXFNGeJFnA0VYAFG3WUshkq4pOfS3g0SOAn7bgLCxB7iHvxD4cjvMAQKzea4iTeF/7PdJOWQfDGV3XxvK9nHQnG79DN+mD4ehFaFJrH8aq0KZbpAUrbXxqgRBeViAeyv3iPC+D4bqcAH+MKFEMuyXfPI+GL3XxjONZQ17K+pCy8QUNfW00zqfnJc+9R3Q4vDHuuYnpby6W8Fn1mQkyPOfNtoP51X5rA4/KY162F9rsKDjPjuZDdAk5Ao5T0piDmF9i2sNZcswLiLgn7ebMtuiK6v+CWHAz7yyqKjoOzrA80XOMWctOVWlueJtJdBec1tbpiiPNY4h7O0m2pqvVDM3eFn2p/r6GYYgXBxmcdRw7OOOZ4eHPmk8h52y7qwWLsqDj53fYtjcuVIkzN1ndYMyd8s6VJG8+gXwKe7ysb7mMb3ZFWcdPxPqQJr19bMT9nGHsJVq0vd1vBNf8oy4tf9M/Cwd3cAf/DvARj5av8+vPrb+sdU+mfSh2cnJycvoq/QMq3joJPaOoUgAAAABJRU5ErkJggg==" className="h-9 w-9 "></img>
            </a>
            <ul  className="flex space-x-10 ">
              <li className=" hover:border-b-4 pb-3 border-blue-700 ">Payments</li>
              <li className=" hover:border-b-4 pb-3 border-blue-700 ">Banking</li>
              <li className=" hover:border-b-4 pb-3 border-blue-700 ">Corporate Card</li>
              <li className=" hover:border-b-4 pb-3 border-blue-700 ">Paypall</li>
              <li className=" hover:border-b-4 pb-3 border-blue-700 ">Resource</li>
              <li className=" hover:border-b-4 pb-3 border-blue-700 ">support</li>
              <li className=" hover:border-b-4 pb-3 border-blue-700 ">Pricing</li>
            </ul>
            <div className=" ml-10 space-x-7  flex ">
            <img src="favicon.ico" className="h-10 w-10"></img>
            
            <button className="border-2  border-blue-900 w-16 ">log in</button>
            <button className="border border-blue-400  bg-white text-blue-700 font-medium w-16  mx-auto">sign up</button>
            </div>
          </div>
        

        </nav>
      </div>
  
    )
  }