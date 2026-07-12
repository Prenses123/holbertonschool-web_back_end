/**
 * Creates an ArrayBuffer and sets an Int8 value at a specific position using a DataView.
 * @param {number} length - The total size of the ArrayBuffer in bytes.
 * @param {number} position - The target index/position to write the value.
 * @param {number} value - The Int8 value to be inserted.
 * @returns {DataView} A DataView pointing to the constructed ArrayBuffer.
 * @throws {Error} Throws "Position outside range" if the position is invalid.
 */
const createInt8TypedArray = (length, position, value) => {
    // Check if the position is out of bounds (negative or exceeding buffer capacity)
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
  
    // 1. Initialize a fixed-length raw binary data buffer
    const buffer = new ArrayBuffer(length);
  
    // 2. Wrap it in a DataView to get a low-level interface for reading/writing
    const view = new DataView(buffer);
  
    // 3. Store the Int8 value at the designated byte position
    view.setInt8(position, value);
  
    return view;
  };
  
  export default createInt8TypedArray;
