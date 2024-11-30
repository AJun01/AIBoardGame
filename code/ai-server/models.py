from typing import Optional, List
from uuid import UUID, uuid4
from pydantic import BaseModel
from enum import Enum
from openai import OpenAI


class GameType(BaseModel):
    game_type: str

class PlayerChoice(BaseModel):
    # user_id: int 
    choice: str

def openai_call(prompt):
    client = OpenAI()
    response = client.chat.completions.create(
        model = "gpt-4o-mini-2024-07-18",
        messages = prompt
    )

    return response.choices[0].message.content
