from uuid import uuid4, UUID
from fastapi import FastAPI
from typing import List
# from models import GameType, PlayerChoice, openai_call
from models import openai_call, GameType, PlayerChoice
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# whitelist for specific origins
origins = [ # example server
    "http://localhost:8080",  # replace with actual domain/IP of other server
    # add other domains or IPs as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # only allow requests from these origins
    allow_credentials=True,
    allow_methods=["*"],  # allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # allow all headers
)

history = []

@app.get("/")
def read_root():
    return {"Hello": "World"}

# @app.post("/game/init")
# # async def create_game_background(game_type: GameType):
# async def create_game_background(game_type: str):
#     # Use OpenAI API to generate the game background based on the game type
#     # prompt = {"role": "system", "content": f"Create an {game_type.game_type} game story backgrounds for player. I'll tell you later what choices the four players make, stopping the story at the first choice to be made. Within 150 words per reply."}
#     prompt = {"role": "system", "content": f"Create an {game_type} game story backgrounds for player. I'll tell you later what choices the four players make, stopping the story at the first choice to be made. Within 150 words per reply."}
#     history.append(prompt)
#     response = openai_call(history)
#     history.append({"role": "assistant", "content": response})
#     return response

@app.post("/game/init")
async def create_game_background(game_type: GameType):
    # Use OpenAI API to generate the game background based on the game type
    # history=[]
    prompt = {"role": "system", "content": f"Create an {game_type.game_type} game story backgrounds for player. I'll tell you later what choices the four players make, stopping the story at the first choice to be made. Within 150 words per reply."}
    history.append(prompt)
    response = openai_call(history)
    history.append({"role": "assistant", "content": response})
    return response

@app.post("/game/choices")
# async def handle_player_choices(playerChoice: PlayerChoice):
async def handle_player_choices(playerChoice: PlayerChoice):
    # Process player choices
    # prompt = f"Player {choice.user_id} chose: {choice.question}"
    # prompt = {"role": "user", "content": {playerChoice.choice}}
    prompt = {"role": "user", "content": playerChoice.choice}
    history.append(prompt)
    response = openai_call(history)
    history.append({"role": "assistant", "content": response})
    return response
