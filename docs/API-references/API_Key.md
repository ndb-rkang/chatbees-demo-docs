# API Key

## Create API Key

API Key must be securely retained for all subsequent operations. Without this API Key, access to the collections created using it will be restricted.

> Currently all collections are created under the PUBLIC account. But don't worry. A collection created by an API Key is only accessible to the API Key. Anyone without the same API Key will not be able to access the collections created by that API Key.

> You will soon be able to create your own account and all your data will be within the account.


HTTP
```http
POST /apikey/create HTTP/1.1
Content-Type: application/json
Host: public.us-west-2.aws.nautilusdb.com

Response:
{
  "api_key": "my_api_key"
}
```

Python
```python
import nautilusdb as ndb

# Create an API key
my_api_key = ndb.create_api_key()
```
