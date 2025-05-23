//
//  main.swift
//  adhocjson
//

//

import Foundation

let a = [ "name": "TestName", "beschreibung": "TestDescription"]
let b = [
    [a]
]


print("Hello, World!")
let encoder = JSONEncoder()
encoder.outputFormatting = .prettyPrinted

let output = try encoder.encode(a)
print(String(data: output, encoding: .utf8)!)
