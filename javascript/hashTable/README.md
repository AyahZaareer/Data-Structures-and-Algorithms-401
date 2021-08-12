# HashTables

## Hash:
 -  A hash is the result of some  algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hashtable, it is used to determine the index of the array.


## Challenge :

   - **add**:
      - Arguments: key, value
      - Returns: nothing
      - This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
      - Time:O(1) , Space:O(1)
   - **get:**
     - Arguments: key
     - Returns: Value associated with that key in the table
     - Time:O(logn) , Space:O(n)
   - **contains:**
     - Arguments: key
     - Returns: Boolean, indicating if the key exists in the table already.
     - Time:O(log n) , Space:O(1)
   - **hash:**
     - Arguments: key
     - Returns: Index in the collection for that key
     - Time:O(n) , Space:O(1)