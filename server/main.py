import os
from langchain.vectorstores import Pinecone
import pinecone
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.embeddings.openai import OpenAIEmbeddings
from flask import jsonify, request

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

def query(request):
    data = request.get_json(silent=True)
    prompt = data.get('prompt')
    response = qa.run(prompt)
    return jsonify({"response": response})
