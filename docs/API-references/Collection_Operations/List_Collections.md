# List Collections

## List Collections

You can see list of collections you have access to. For example, this list will include the public read-only collections, as well as all collections that were created using the currently configured API key.

HTTP
```http
POST /collections/list HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string"
}

Response:
{
  "names": [
    "string"
  ]
}
```

Python
```python
import nautilusdb as ndb

# Configure ndb to use the API key
ndb.init(api_key="my_api_key")

# List collections
collections = [col.name for col in ndb.list_collections()]

# returns custom_collection
print(collections)
```
