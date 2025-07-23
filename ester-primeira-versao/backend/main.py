from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import openai
import os
import json

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"mensagem": "Ester API está ativa."}

@app.post("/mensagem")
async def responder(req: Request):
    data = await req.json()
    user_input = data.get("mensagem", "")
    emocao = "alegre" if "feliz" in user_input else "neutra"
    resposta = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_input}]
    )
    return {
        "resposta": resposta.choices[0].message.content,
        "emocao": emocao,
        "voz": f"/voz/{emocao}/audio.mp3"
    }
