
export interface Faculty{

    firstname:string
    lastname:string
}

export interface Course{
    title:string
    Code:string 
    faculty:Faculty[]
}

export interface Program{
    name:string
    courses:Course[]
}