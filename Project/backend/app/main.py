from fastapi import FastAPI
from .schemas import AboutMe, Project
from typing import List
import json
app = FastAPI()


def load_data():
    with open("app/data.json","r") as file:
        return json.load(file)


@app.get("/")
def read_root():
    return {"message": "Tjena! Mitt Api fungerar!"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id":item_id, "message": "Du sökte på et id!"}


@app.get("/about", response_model=AboutMe)
def get_about_me():
    data = load_data()
    return data["about"]

@app.get("/Projects", response_model = List[Project])
def get_Projects():
    data = load_data()
    return data["projects"]
