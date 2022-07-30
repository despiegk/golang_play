from algosdk import mnemonic
from algosdk.v2client import algod
from algosdk.v2client import indexer
from IPython import embed
import json

mn = "inherit, woman, survey, spoon, verify, heavy, obey, law, shallow, slow, warfare, furnace, cotton, toast, same, pen, athlete, pizza, ready, soul, banana, project, run, able, spider"
privk = mnemonic.to_private_key(mn.replace(",",""))
pubk = mnemonic.to_public_key(mn.replace(",",""))

algod_token = "KX0IJWxXmg9nrvvzfHt03sEjo068c6i8y16OE9Ec"   #api key to https://developer.purestake.io/home

indexer_token = ""
headers = {
  "X-API-Key": algod_token
}

algod_token = "KX0IJWxXmg9nrvvzfHt03sEjo068c6i8y16OE9Ec"   #api key to https://developer.purestake.io/home

#network is mainnet, local, testnet or betanet
def net_get(network,prefix="ps2"):
    
    if network == "mainnet":
        algod_address = f"https://mainnet-algorand.api.purestake.io/{prefix}"
    elif network == "local":
        algod_address = "http://localhost:4001"
    elif network == "testnet":
        algod_address = f"https://testnet-algorand.api.purestake.io/{prefix}"
    elif network == "betanet":
        algod_address = f"https://betanet-algorand.api.purestake.io/{prefix}"
    else:
        raise Exception('netchoice', network)
    # embed()
    return algod_address


def client_index_get(network):
    algod_address = net_get(network,"idx2")
    indexer_client = indexer.IndexerClient(indexer_token, algod_address, headers)
    return indexer_client


def client_get(network):
    """
    Return a client connected to the supplied network.
    """
    algod_address = net_get(network)
    algod_client = algod.AlgodClient(algod_token, algod_address, headers)
    status = algod_client.status()
    try:
        status = algod_client.status()
        print("Status: " + json.dumps(status, indent=2, sort_keys=True))
    except Exception as e:
        print("Failed to get algod status: {}".format(e))
    return algod_client


