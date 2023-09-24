from flask import escape, jsonify, make_response
import functions_framework

# Importaciones relevantes de tu función original
from langchain.vectorstores import Pinecone
import pinecone
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.embeddings.openai import OpenAIEmbeddings
import os

# Configuraciones iniciales
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
PINECONE_API_KEY = os.environ.get('PINECONE_API_KEY')
ENVIRONMENT = 'gcp-starter'
INDEX_NAME = 'python-index'
MODEL_NAME = 'gpt-3.5-turbo'
TEXT_FIELD = 'combined'

pinecone.init(
    api_key=PINECONE_API_KEY,
    environment=ENVIRONMENT
)

index = pinecone.Index(INDEX_NAME)

embed = OpenAIEmbeddings(
    model='text-embedding-ada-002',
    openai_api_key=OPENAI_API_KEY
)

llm = ChatOpenAI(
    openai_api_key=OPENAI_API_KEY,
    model_name=MODEL_NAME,
    temperature=0.0
)

vectorstore = Pinecone(
    index, embed.embed_query, TEXT_FIELD
)

qa = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vectorstore.as_retriever()
)

@functions_framework.http
def query(request): 
    # Verifica si es una solicitud de pre-vuelo (OPTIONS) debido a CORS
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response
    
    data = request.get_json(silent=True)
    
    if data is None:
        return jsonify({"error": "Invalid JSON data"}), 400
    
    prompt = data.get('prompt')
    
    if 'prompt' not in data:
        return jsonify({"error": "Missing 'prompt' in request data"}), 400
    
    response = qa.run(prompt)
    
    response = jsonify({"response": response})
    
    response.headers['Access-Control-Allow-Origin'] = '*'
    
    return response
