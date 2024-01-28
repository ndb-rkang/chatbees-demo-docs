# Create Collection

## Create Collection
A Collection is the organizational unit for your data. The question asked to a collection will be analyzed and answered from all data in the collection. It is recommended to put different data into different collections.

HTTP
```http
POST /collections/create HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string",
  // description is Optional
  "description": "string" or null
}

Response:
{}
```

Python
```python
import nautilusdb as ndb

# Configure ndb to use the API key
ndb.init(api_key="my_api_key")

# Create a collection
col = ndb.collection('my_collection')
ndb.create_collection(col)
```
