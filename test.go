package main

import (
	"crypto/ed25519"
	"fmt"
	"strings"

	"github.com/algorand/go-algorand-sdk/mnemonic"
)

// TODO: insert additional utility functions here

type algoclient struct {
	pubkey  string
	privkey ed25519.PrivateKey
}

// Method with a receiver
// of author type
func (a algoclient) init(mn string) {
	pk, err := mnemonic.ToKey(strings.Replace(mn, ",", "", -1))
	if err != nil {
		fmt.Printf("Error getting private key: %s, original was %s\n", err, mn)
	} else {
		a.privkey = pk
	}
}

func main() {
	// Create account

	ac := algoclient{}

	pubKey1, priKey1, _ := ed25519.GenerateKey(nil)
	println(pubKey1)
	println(priKey1)

	mn := "inherit, woman, survey, spoon, verify, heavy, obey, law, shallow, slow, warfare, furnace, cotton, toast, same, pen, athlete, pizza, ready, soul, banana, project, run, able, spider"
	// account := crypto.GenerateAccount()
	println(strings.Replace(mn, ",", "", -1))

	// myAddress := account.Address.String()

	// if err != nil {
	// 	fmt.Printf("Error creating transaction: %s\n", err)
	// } else {
	// 	fmt.Printf("My address: %s\n", myAddress)
	// 	fmt.Printf("My passphrase: %s\n", passphrase)
	// 	fmt.Println("--> Copy down your address and passpharse for future use.")
	// 	fmt.Println("--> Once secured, press ENTER key to continue...")
	// 	fmt.Scanln()
	// }

	// TODO: insert additional codeblocks here
}
