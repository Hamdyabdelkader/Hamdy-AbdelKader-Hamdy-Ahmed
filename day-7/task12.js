const nums = [1, 2, 3];
nums.push(4);
console.log(nums);//[1, 2, 3, 4]

nums[0] = 10;
console.log(nums);//[10, 2, 3, 4]

try {
    nums = [5, 6, 7];
} catch (error) {
    console.log(error.message);//Error
}

//array can add/change/delete it's element but can't change the all array same as object