<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait ApiResponseTrait
{
    /**
     * Send a success response.
     *
     * @param array|string|object $data
     * @param string|null $message
     * @param int $status
     * @return JsonResponse
     */
    public function successResponse(array|string|object $data, string $message = null, int $status = 200): JsonResponse
    {
        $response = [
            'data' => $data,
            'message' => $message,
        ];

        return response()->json($response, $status);
    }

    /**
     * Send an error response.
     *
     * @param array|string $message
     * @param int $status
     * @return JsonResponse
     */
    public function errorResponse(string $message, array $errors=[], int $status = 500): JsonResponse
    {
        $response = [
            'message' => $message,
            'errors' => $errors,
        ];

        return response()->json($response, $status);
    }
}
