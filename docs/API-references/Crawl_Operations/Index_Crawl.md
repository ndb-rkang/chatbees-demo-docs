# Index Crawl

After a crawl completes and you are satisfied with the crawled pages, simply call index_crawl() to index all content into the collection.

HTTP
```http
POST /docs/index_crawl HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string",
  "crawl_id": "string"
}

Response:
{}
```

Python
```python
import nautilusdb as ndb

# Configure ndb to use the API key
ndb.init(api_key="my_api_key")

col = ndb.collection('my_collection')

col.index_crawl(crawl_id)
```
