
from algosdk import account, encoding,mnemonic
import crypto
import json
import gevent

mn = "inherit, woman, survey, spoon, verify, heavy, obey, law, shallow, slow, warfare, furnace, cotton, toast, same, pen, athlete, pizza, ready, soul, banana, project, run, able, spider"
privk = mnemonic.to_private_key(mn.replace(",",""))
pubk = mnemonic.to_public_key(mn.replace(",",""))
algod_token = "KX0IJWxXmg9nrvvzfHt03sEjo068c6i8y16OE9Ec"   #api key to https://developer.purestake.io/home


cl = crypto.client_get("testnet")




# print(privk)
# print(pubk)



# Function from Algorand Inc.
# def wait_for_confirmation(client, txid):
#     last_round = client.status().get('last-round')
#     txinfo = client.pending_transaction_info(txid)
#     while not (txinfo.get('confirmed-round') and txinfo.get('confirmed-round') > 0):
#         print('Waiting for confirmation')
#         last_round += 1
#         client.status_after_block(last_round)
#         txinfo = client.pending_transaction_info(txid)
#     print('Transaction confirmed in round', txinfo.get('confirmed-round'))
#     return txinfo

# client = pick_client("testnet")
# print(client.asset_info("ALGO"))

# print(find_assets("","testnet"))


# algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
# algod_client = algod.AlgodClient(algod_token, algod_address)

# account_info = algod_client.account_info(my_address)
# print("Account balance: {} microAlgos".format(account_info.get('amount')) + "\n")

# # generate an account
# private_key, address = account.generate_account()
# print("Private key:", private_key)
# print("Address:", "CTDDDZAJPR4FSXUVISN2JWSMQMN3YEODXLVKY7OH424HRGNV5WE2Z62TQE")

# # check if the address is valid
# if encoding.is_valid_address(address):
#     print("The address is valid!")
# else:
#     print("The address is invalid.")

# txn = AssetConfigTxn(sender=accounts[1]['pk'],
#                      sp=params,
#                      total=1,           // NFTs have totalIssuance of exactly 1
#                      default_frozen=False,
#                      unit_name="ALICEART",
#                      asset_name="Alice's Artwork@arc3",
#                      manager="",
#                      reserve="",
#                      freeze="",
#                      clawback="",
#                      url="https://path/to/my/nft/asset/metadata.json",
#                      metadata_hash=json_metadata_hash,
#                      decimals=0)        // NFTs have decimals of exactly 0