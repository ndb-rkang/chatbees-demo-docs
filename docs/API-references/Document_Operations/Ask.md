# Ask

You can ask questions within a collection. ```ask()``` method returns a plain-text answer to your question, as well as a list of most relevance references used to derive the answer.
By default, ask will get answers from all relevant documents in the collection. If you want to ask a single document, you could limit the document when ask.

HTTP
```http
POST /docs/ask HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string",
  "question": "string",
  // Optional top_k, default is 5.
  "top_k": int,
  // Optional doc_name. if specified, question will be answered with the
  // context only from the doc.
  "doc_name": "string" or null,
  // The chat history
  history_messages: [(question1, answer1), ...]
}

Response:
{
  "answer": "string",
  "refs": [
    {"doc_name": "string", "page_num": int, "sample_text": "string"},
    ...
  ]
}
```

Python
```python
import nautilusdb as ndb

# Optional API key to access private collections
ndb.init(api_key="my_api_key")

# get answer from all docs in the collection
answer, refs = ndb.collection('llm_research').ask('what is a transformer?')

# get answer from a specific doc in the collection
answer, refs = ndb.collection('llm_research').ask(question='what is a transformer?', doc_name='file.pdf')
```
