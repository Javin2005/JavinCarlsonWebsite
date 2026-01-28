from pydantic import BaseModel
from typing import List



class AboutMe(BaseModel):
    name: str
    last_name: str
    role: str
    status: str
    hobbies: List[str]

class Project(BaseModel):
    id: int
    title: str
    description: str
    tech_stack: List[str]
    github_url: str | None = None
    live_url: str | None = None
    image_url: str | None = None
    featured: bool
    category: str
    difficulty: int