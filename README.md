# 🎲 AI-Powered Board Game Platform

Welcome to our AI-powered online board game platform, where an intelligent game master guides players through thrilling adventures and interactive storytelling! 🚀

## 📜 Table of Contents
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [Accomplishments](#accomplishments)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🎮 What It Does
Our project brings classic board games into the digital world with the help of AI! The AI serves as the game master 🧙, hosting games like *Dungeons and Dragons* and more. Players can join different game sessions—adventure, mystery, investigation—and play together while the AI dynamically adapts to their choices.

## 🛠 How We Built It
This project is made up of three core components:

- **Client-side**: 🌐 Built with React, the front-end provides a smooth user experience for players to easily join and engage in the game.
- **Spring Boot API**: 🛠 The backend manages user authentication, game sessions, and communication between the client and the AI. It's designed using RESTful principles to be scalable and efficient.
- **AI Game Master**: 🤖 The AI, powered by FastAPI, acts as the game master—explaining the rules, setting up the game, and narrating as players progress. It adjusts the story based on player actions, providing a unique experience every time.

## 🚧 Challenges We Faced
We encountered a few bumps along the road:

- **AI Integration**: Ensuring the AI could interact smoothly with the game logic and respond to players’ unpredictable choices required significant testing and adjustments. 🧑‍🔧
- **Real-Time Communication**: Synchronizing player inputs across the client, server, and AI without causing delays was a tricky task. 🕒
- **Balancing Gameplay**: Making sure the AI-hosted game was fun and challenging without becoming overwhelming was an ongoing process. ⚖️

## 🏆 Accomplishments
We’re proud of several key achievements:

- Successfully integrating an AI that can adapt and narrate complex game sessions in real-time. 🤩
- Building a robust Spring Boot API that manages real-time multiplayer game sessions. 🖥️
- Delivering a polished client-side interface with smooth, engaging gameplay. 🎮

## 📦 Installation
To get the project running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ai-board-game.git

	2.	Navigate into the project folder:

cd ai-board-game


	3.	Install the dependencies for the client and server:
	•	For the client:

cd client
npm install


	•	For the server:

cd server
./mvnw install


	4.	Start both the client and server:
	•	Client:

npm start


	•	Server:

./mvnw spring-boot:run



🚀 Usage

Once the project is running, you can open your browser and navigate to http://localhost:3000 to start playing!

	1.	Sign up and create an account. 👤
	2.	Join a game session hosted by the AI. 🤖
	3.	Start playing with friends, make decisions, and see how the AI responds! 🎲

🤝 Contributing

We welcome contributions from everyone! Please check our CONTRIBUTING.md file for more details on how you can help improve this project.

📄 License

This project is licensed under the MIT License. See the LICENSE file for more information.

Made with ❤️ by Yujun Liu(sb-server) - Yu Luo(client) - Zhuoyue Sun(AI-server)