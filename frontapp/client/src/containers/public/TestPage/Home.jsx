import React from "react";
import { InnerContainer, OuterContainer } from "../../../assets/css/Container";
import Login from "../login/Login";

const Home = () => {
  return (
    <OuterContainer className="container mx-auto my-5 flex space-x-5">
      <InnerContainer className="w-1/2 px-10 py-4 border-[1px]">
        <InnerContainer className="flex flex-col gap-3 leading-7">
          <h1 className="font-Poppins text-[16px] bg-sky-300 px-5 py-2 rounded-md">
            Frontend- React with Express js
          </h1>
          <ol className="list-decimal list-start-1 font-Poppins text-justify">
            <li>
              Frontend
              <ul className="list-disc ml-4 text-[14px]">
                <li>
                  <span className="text-[15px] font-bold ">
                    React Library -
                  </span>{" "}
                  for the UI
                  <ul className="list-disc flex flex-col gap-4 ml-5">
                    <li>React-redux, redux tookit</li>
                  </ul>
                </li>
                <li>
                  <span className="text-[15px] font-bold">Express js - </span>{" "}
                  serving the rect application. Express.js can be used as a
                  reverse proxy to handle requests to the Django API and serve
                  the React application to clients.
                  <ul className="list-disc flex flex-col gap-4 ml-5">
                    <li>
                      Why Express ?
                      <ol className="list-decimal list-start-1 leading-7">
                        <li>
                          <span className="text-[15px] font-bold">
                            Simplified server setup:
                          </span>{" "}
                          can simplify the setup of your server by using a
                          single framework for both serving the React
                          application and handling API requests.
                        </li>
                        <li>
                          <span className="text-[15px] font-bold">
                            Improved performance:
                          </span>{" "}
                          lightweight framework that can handle a large number
                          of requests with minimal overhead. This can improve
                          the performance of your server and reduce latency for
                          API requests.
                        </li>
                        <li>
                          <span className="text-[15px] font-bold">
                            Server-side rendering:
                          </span>{" "}
                          Express.js can be used to provide server-side
                          rendering of React components, which can improve page
                          load times and search engine optimization (SEO) by
                          rendering the HTML content of the page on the server
                          before sending it to the client.
                        </li>
                        <li>
                          <span className="text-[15px] font-bold">
                            Security:
                          </span>{" "}
                          By using Express.js, you can enforce security best
                          practices, such as rate limiting, authentication, and
                          authorization, to protect your server from attacks.
                        </li>
                        <li>
                          <span className="text-[15px] font-bold">
                            Customization:
                          </span>{" "}
                          With Express.js, you have full control over the server
                          configuration and middleware, allowing you to
                          customize the server to meet the specific needs of
                          your application.
                        </li>
                      </ol>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </InnerContainer>
      </InnerContainer>
      <InnerContainer className="w-1/2 px-10 py-4 border-[1px]">
        <InnerContainer className="flex flex-col gap-3 leading-7">
          <h1 className="font-Poppins text-[16px] bg-sky-300 px-5 py-2 rounded-md">
            Backend-Django
          </h1>
          <ol className="list-decimal list-start-1 font-Poppins text-justify">
            <li>
              Django
              <ul className="list-disc ml-4 text-[14px]">
                <li>User Authentication</li>
              </ul>
            </li>
          </ol>
        </InnerContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Home;
