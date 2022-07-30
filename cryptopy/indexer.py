from algosdk.v2client import indexer
import json
import crypto

indexer_client = crypto.client_index_get("testnet")

response = indexer_client.search_assets(name='algo', limit=1)

print("Asset search: " + json.dumps(response, indent=2, sort_keys=True))

