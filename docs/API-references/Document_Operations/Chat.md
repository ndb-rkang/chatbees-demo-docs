# Chat

You may want to ask a follow-up question on top of the previous questions and answers. You can do so with ```chat()``` API. Ask in a chat will answer the question based on the contents related to the question and the previous questions and answers.
By default, chat will get answers from all relevant documents in the collection. If you want to chat with a single document, you could limit the document when ask.

Python
```python
import nautilusdb as ndb

# Optional API key to access private collections
ndb.init(api_key="my_api_key")

# start a new chat
chat = ndb.collection('llm_research').chat()

# to chat with a single document, specify the doc_name
# chat = ndb.collection('llm_research').chat(doc_name='file.pdf')

# ask the first question
answer, refs = chat.ask('what is a transformer?')

# ask the second question
answer, refs = chat.ask('how does transformer work?')
```
