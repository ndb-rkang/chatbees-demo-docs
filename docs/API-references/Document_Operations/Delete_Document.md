# Delete Document

Delete a document in a collection.

HTTP
```http
POST /docs/delete HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string",
  "doc_name": "string"
}

Response:
{}
```

Python
```python
import nautilusdb as ndb

# Optional API key to access private collections
ndb.init(api_key="my_api_key")

ndb.collection('llm_research').delete_document('file.pdf')
```

