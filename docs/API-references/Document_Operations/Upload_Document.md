# Upload Document

Upload a document to a collection. Currently we support a maximum file size of 10 MB and the following content types
- PDF (.pdf)
- Plaintext (.txt)
- CSV (.csv)
- Markdown (.md)
- Microsoft Words (.docx)

> Documents have to be uniquely named.  If one document is uploaded with a name that is the same as one already uploaded, it will replace that document.

HTTP
```http
POST /docs/add HTTP/1.1
Api-Key: my_api_key
Host: public.us-west-2.aws.nautilusdb.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="example.txt"
Content-Type: text/plain

[File content here]

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="request"

{
  "namespace_name": "string",
  "collection_name": "string"
}
----WebKitFormBoundary7MA4YWxkTrZu0gW--
```

Python
```python
import nautilusdb as ndb

# Optional API key to access private collections
ndb.init(api_key="my_api_key")

# Create a collection called llm_research.
collection = ndb.collection('llm_research')
ndb.create_collection(collection)

# Local file and URLs are both supported.
# URL must contain the full scheme prefix (http:// or https://)
ndb.collection('llm_research').upload_document('/path/to/file.pdf')
ndb.collection('llm_research').upload_document('https://path/to/file.pdf')
```
