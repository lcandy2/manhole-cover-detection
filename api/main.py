import io

from fastapi import FastAPI, File, UploadFile
from PIL import Image

from model import predict

app = FastAPI()

@app.post("/manholes/")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    results = predict(image)
    return results

@app.get("/")
async def read_root():
    return {"status": True}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
