# # y= 1
# # x = 0
# # a = [1,455,45,8,5595,545,2345678902]
# # for i in a:
# #     if i > x:
# #         x = i 
# # print(x)        
# # for i in a:
# #     if i>y and i != x:
# #     print (x)
# def canPlaceFlowers(flowerbed, n):
#     for i in range(len(flowerbed)):
#         if flowerbed[i] == 0:
#             left = flowerbed[i - 1] if i > 0 else 0
#             right = flowerbed[i + 1] if i < len(flowerbed) - 1 else 0
            
#             if left == 0 and right == 0:
#                 flowerbed[i] = 1
#                 n -= 1
#                 if n == 0:
#                     return True
#     return n <= 0
# canPlaceFlowers= [0,0,0,1,1,1]
# x = [1,2,3,1]
# # for i in range(len()) :
# #     if i == x:
# #         print  ("True")
# #     else:
# #         print ("false")    
      
# return len(x)!=len(set(x))
list1= [ 1,2,3,4]
list2= [2,3,5]
for i in list1:
    for j in  list2:
        if i ==j:
           print 

