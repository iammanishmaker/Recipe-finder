import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Hitesh",
        login: "",
        location: "Hisar",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/hiteshbatra1");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;

    return (
      <div className="flex  justify-around flex-row min-h-[88vh]">
        <div className="github  border border-white h-[50vh] w-2/6  rounded-lg shadow-xl text-orange-500 font-bold p-4 my-16 transition ease-in-out delay-75 hover: -translate-y-1 hover:scale-105 duration-300">
          {/* <img src="{avatar_url}" /> */}
          <span className="flex flex-row items-center justify-center">
            <a href="https://github.com/hiteshbatra1" target="_blank">
              <FaGithub className="w-8 h-8 m-2" />
            </a>
            <a href="https://linkedin.com/in/hitesh-batra-h/" target="_blank">
              <FaLinkedin className="w-5 h-5 m-2" />
            </a>
          </span>

          <h1 className="p-2"> Name: {name}</h1>
          <h2 className="p-2">Username: {login}</h2>
          <p className="p-4">
            I'm a passionate front-end developer with a love for crafting clean,
            responsive, and user-friendly web interfaces. I believe in the power
            of good design and seamless user experiences, bringing creativity
            and functionality together in every project I work on.
          </p>
        </div>

        <div className="projects borderborder border-white h-[50vh] w-2/6  rounded-lg shadow-xl text-orange-500 font-bold p-4 my-16 transition ease-in-out delay-75 hover: -translate-y-1 hover:scale-105 duration-300">
          <h1 className="text-center text-xl">My Projects</h1>
          <ul className="p-5">
            <li>
              <span>
                <a href="https://hitesh-recipeapp.netlify.app/" target="_blank">
                  [Project 1] –
                </a>
                <p className="p-2">
                  A dynamic recipe finder that lets users search, filter, and
                  save their favorite recipes with ease.
                </p>
              </span>
            </li>
            <li>
              <span>
                <a href="https://hitesh-todo-list.netlify.app/" target="_blank">
                  [Project 2] –
                </a>
                <p className="p-2">
                  An interactive to-do list app with real-time updates and local
                  storage integration.
                </p>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="https://hitesh-calculator.netlify.app/"
                  target="_blank"
                >
                  [Project 3] –
                </a>
                <p className="p-2">
                  A custom calculator built with JavaScript, focusing on clean
                  logic without using eval().
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserClass;
