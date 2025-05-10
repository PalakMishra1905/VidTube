export const API_KEY = 'AIzaSyAkU1x38nwkByGxP3s869Vfs23q5YPmwRg'

export const value_converter = (value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000) + 'M'
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + 'k'
    }
    else{
        return value;
    }
} 