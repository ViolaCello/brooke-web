class Node
    attr_accessor :value, :next

    def initialize(value)
        @value = value
        @next = nil
    end
end

class Stack
    attr_accessor :first, :last, :size

    def initialize
        @first = nil
        @last = nil
        @size = 0
    end


    def push(val)
        new_node = Node.new(val)
        if !@first
            @first = new_node
            @last = new_node
        else 
            old_head = @first
            @first = new_node
            new_node.next = old_head
        end
        return @size += 1
    end

    def pop
        return nil if @size==0
        old_head = @first
        if @first==@last
            @last = nil
        end
        @first = @first.next
        @size -= 1
        return old_head
    end

end