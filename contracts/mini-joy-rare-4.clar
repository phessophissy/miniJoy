;; title: mini-joy-rare-4
;; summary: miniJoy Tier-4 NFT contract.

(impl-trait .sip009-nft-trait.sip009-nft-trait)

(define-non-fungible-token mini-joy-rare-4-token uint)

(define-constant CONTRACT-OWNER tx-sender)
(define-constant MAX-SUPPLY u1)
(define-constant MINT-FEE u750)
(define-constant TOKEN-URI "ipfs://mini-joy/rare-4.json")

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-SOLD-OUT (err u101))
(define-constant ERR-NOT-TOKEN-OWNER (err u102))
(define-constant ERR-TOKEN-NOT-FOUND (err u103))
(define-constant ERR-INVALID-RECIPIENT (err u104))

(define-data-var last-token-id uint u0)

(define-public (mint)
  (let ((next-id (+ (var-get last-token-id) u1)))
    (asserts! (<= next-id MAX-SUPPLY) ERR-SOLD-OUT)
    (try! (stx-transfer? MINT-FEE tx-sender CONTRACT-OWNER))
    (try! (nft-mint? mini-joy-rare-4-token next-id tx-sender))
    (var-set last-token-id next-id)
    (ok next-id)
  )
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
  (let ((owner (unwrap! (nft-get-owner? mini-joy-rare-4-token token-id) ERR-TOKEN-NOT-FOUND)))
    (asserts! (is-eq tx-sender sender) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq owner sender) ERR-NOT-TOKEN-OWNER)
    (asserts! (is-standard recipient) ERR-INVALID-RECIPIENT)
    (try! (nft-transfer? mini-joy-rare-4-token token-id sender recipient))
    (ok true)
  )
)

(define-read-only (get-last-token-id)
  (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
  (if (<= token-id (var-get last-token-id))
    (ok (some TOKEN-URI))
    (ok none)
  )
)

(define-read-only (get-owner (token-id uint))
  (ok (nft-get-owner? mini-joy-rare-4-token token-id))
)

(define-read-only (get-mint-fee)
  MINT-FEE
)

(define-read-only (get-rarity-label)
  "Tier-4"
)
