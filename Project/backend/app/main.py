from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .schemas import AboutMe, Project
from typing import List
import json


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def load_data():
    with open("app/data.json","r") as file:
        return json.load(file)


@app.get("/")
def read_root():
    return {"message": "Tjena! Mitt Api fungerar!"}

@app.get("/about", response_model=AboutMe)
def get_about_me():
    data = load_data()
    return data["about"]

@app.get("/projects", response_model = List[Project])
def get_Projects():
    data = load_data()
    return data["projects"]

@app.get("/projects/{project_id}", response_model=Project)
def get_project(project_id: int):
    data = load_data()
    projects = data["projects"]

    project = next((p for p in projects if p["id"] == project_id), None)

    if project is None:
        raise HTTPException(status_code=404, detail="Project could not be found")
    
    return project