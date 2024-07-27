from rest_framework.decorators import api_view
from rest_framework.response import Response

# return data no functions
@api_view(['POST'])
def approve(request):
    if request.method == 'POST':
        data = request.data
        return Response({'received_data': data})
    return Response({'error': 'Invalid request'}, status=400)
