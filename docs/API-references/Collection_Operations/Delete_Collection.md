# Delete Collection

## Delete Collection

You can delete a private collection using the same API key that was used to create it.

HTTP
```http
POST /collections/delete HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string"
}

Response:
{}
```

Python
```python
import nautilusdb as ndb

# Configure ndb to use the API key
ndb.init(api_key="my_api_key")

# Delete a collection
ndb.delete_collection("custom_collection")
```
