# Get Crawl

Check the crawl status to see when the crawl completes.

HTTP
```http
POST /docs/get_crawl HTTP/1.1
Api-Key: my_api_key
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

{
  "namespace_name": "string",
  "collection_name": "string",
  "crawl_id": "string"
}

Response:
{
  "root_url": "string",
  "created_on": int,
  "max_pages": int,
  // crawl_status: 1 = RUNNING, 2 = SUCCEEDED, 3 = FAILED
  "crawl_status": int,
  "crawl_result": {
    // error_code and error_msg is Optional, only set if crawling url1 fails
    "url1": {"char_count": int, "error_code": "string" or null, "error_msg": "string" or null},
    ...
  }
}
```

Python
```python
import nautilusdb as ndb

# Configure ndb to use the API key
ndb.init(api_key="my_api_key")

col = ndb.collection('my_collection')

# check the crawl status
resp = col.get_crawl(crawl_id)
print(resp.crawl_status)
```

