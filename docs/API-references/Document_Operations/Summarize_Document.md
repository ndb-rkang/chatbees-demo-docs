# Summarize Document

After a document is uploaded, you can get a summary of the document. ```summarize_document()``` method returns a plain-text summary of the document.

HTTP
```http
POST /docs/summary HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string",
  "doc_name": "string"
}

Response:
{
  "summary": "string"
}
```

Python
```python
import nautilusdb as ndb

# Optional API key to access private collections
ndb.init(api_key="my_api_key")

summary = ndb.collection('llm_research').summarize_document('file.pdf')
```
