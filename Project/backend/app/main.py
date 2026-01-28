from fastapi import FastAPI
from .schemas import AboutMe, Project
from typing import List

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Tjena! Mitt Api fungerar!"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id":item_id, "message": "Du sökte på et id!"}


@app.get("/about", response_model=AboutMe)
def get_about_me():
    return {
        "name": "Javin",
        "role": "Datateknikstudent",
        "status": "Learning FastAPI",
        "hobbies": ["Programmering", "Träning", "Annat"]
    }

@app.get("/Projects", response_model = List[Project])
def get_Projects():
    return [{
        "id": 1,
        "title": "Min CV Sida",
        "description": "Detta projektet som jag jobbar på nu!",
        "tech_stack": ["FastAPI", "Python", "React"],
        "github_url": "https://github.com/Javin2005/JavinCarlsonWebsite",
        "live_url": None, 
        "image_url": None,
        "featured": True,
        "category": "Webbutveckling",
        "difficulty": 3
    }]
