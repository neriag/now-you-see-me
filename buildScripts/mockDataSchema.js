export const schema = {
    "type": "object",
    "properties": {
        "random": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string",
                },
                "title": {
                    "type":"string",
                    "faker": "name.firstName"
                },
                "year": {
                    "type": "integer",
                    "minimum": 1900,
                    "maximum": 2018
                },
                "rating": {
                    "type": "number",
                    "maximum": 9.9,
                    "minimum": 0.1
                },
                "image": {
                    "type": "string",
                    "faker": "image.imageUrl"
                },
                "description": {
                    "type": "string"
                }
            },
            "required": ["id", "title", "year", "rating", "image", "description"]
        }
    },
    "required": ["random"]    
  };