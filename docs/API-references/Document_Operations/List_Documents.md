# List Documents

List all documents in a collection. ```list_documents()``` method returns a list of document names in the collection.

HTTP
```http
POST /docs/list HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string"
}

Response:
{
  "doc_names": [
    "string"
  ]
}
```

Python
```python
import nautilusdb as ndb

# Optional API key to access private collections
ndb.init(api_key="my_api_key")

docs = ndb.collection('llm_research').list_documents()
```
