# Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
# Return the running sum of nums.


def running_sum(nums)
    result = []
     result[0] = nums[0]
   nums.each_with_index do |n, i|
       if i!=0
           result.push(n + result[i-1])
       end
   end
    return result
end

# recreate indexOf
def linear_search(arr, item)
    for i in arr do
        if arr[i]==item
            return i
            break
        end
    end
   return -1
end

# binary search
def binary_search(arr, value)
    left = 0
    right = arr.length - 1
    mid = ((left+right)/2).floor
    if arr[mid]==value 
        puts mid
        return mid
    end
    puts "line 10"
    while arr[mid]!=value && left<=right do
    mid = ((left+right)/2).floor
       puts "line 12"
       puts "left", left
       puts "right", right
       puts "mid", mid
        if left==right-1
            if arr[left]==value
                puts "The result is,",left
                return left
            elsif  
                arr[right]==value
                puts "The result is, ",right
                return right
            else 
                puts -1
                return -1
            end
puts "line 28"
        end
        puts "line 30"
        if arr[mid]==value
            puts "The result is=", mid
            return mid
        elsif  
            value<arr[mid]
            right = mid
        else 
            left=mid
        end
    end
    puts "last line, -1"
    return -1
end

def naiveStringSearch(string, frag) 
    count = 0
    s = string.length - 1
    f = frag.length - 1
    for i in 0..s do 
        for j in 0..f do 
          if frag[j] != string[i+j]
            break
          elsif j==f 
            count += 1
        end
    end
  end
  return count
end

def bubbleSort(arr)
    for array in arr do
        j=0;
        while j<arr.length-1 do
            if arr[j]>arr[j+1]
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            end
            j += 1
        end
    end
    return arr 
end