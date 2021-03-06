import { Node } from './node'

export interface StackNode {
    value: Node,
    next: StackNode | null
}

export interface Stack {
    first: StackNode | null,
    size: number
}

export class StackNode {
    constructor(node: Node) {
        this.value = node
        this.next = null
    }
}
export class Stack {
    constructor() {
        this.first = null
        this.size = 0
    }
    push(node: Node): Stack {
        if (this.size === 0) {
            this.first = new StackNode(node)
        } else {
            let restOfStack = this.first
            this.first = new StackNode(node)
            this.first.next = restOfStack
        }
        this.size++
        return this
    }
    pop(): Node | null {
        let poppedNode
        if (this.first === null) {
            return null
        } else if (this.size === 1 && this.first !== null) {
            poppedNode = this.first
            this.first = null
        } else {
            let restOfStack = this.first.next
            poppedNode = this.first
            this.first = restOfStack
        }
        this.size--
        return poppedNode.value
    }
    contains(node: Node): boolean {
        if (this.size === 0) {
            return false
        } else if (this.size === 1) {
            if (node.row === this.first?.value.row && node.column === this.first?.value.column) {
                return true
            } else {
                return false
            }
        } else if (this.size > 1 && this.first !== null) {
            let current = this.first
            while (current.next !== null) {
                if (current.value.row === node.row && current.value.column === node.column) {
                    return true
                }
                current = current.next
            }
            if (current.value.row === node.row && current.value.column === node.column) {
                return true
            }
            return false
        } else {
            return false
        }
    }
}