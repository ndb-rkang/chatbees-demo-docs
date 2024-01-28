# Create Crawl

Specify the website root url and the collection for the website content. The service will automatically crawl it. This API returns a ```crawl_id```, that you can use to track the crawl status. 

HTTP
```http
POST /docs/create_crawl HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string",
  "root_url": "string"
}

Response:
{
  "crawl_id": "string"
}
```

Python
```python
import nautilusdb as ndb

# Configure ndb to use the API key
ndb.init(api_key="my_api_key")

col = ndb.collection('my_collection')

# create crawl, currently crawl up to 200 pages.
# a crawl_id is returned, and you could use it to get the crawl status.
crawl_id = col.create_crawl(root_url)
```
