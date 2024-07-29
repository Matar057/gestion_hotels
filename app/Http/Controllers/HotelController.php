<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hotels = Hotel::all(['id','hotelName','prix','currency','image','addresse']);
        return response()->json($hotels);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }


    public function store(Request $request)
    {
        // Validation des données
        $validatedData = $request->validate([
            "hotelName" => "required|string",
            "addresse" => "required|string",
            "email" => "required|email",
            "telephone" => "required",
            "prix" => "required|numeric",
            "currency" => "required",
            "image" => "nullable", // Validation des images
        ]);

        // Gestion de l'image si présente
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $validatedData['image'] = $imagePath; // Enregistre le chemin de l'image dans la base de données
        }

        // Création de l'hôtel
        $hotel = Hotel::create($validatedData);

        return response()->json(['success' => true, 'hotel' => $hotel], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $hotel = Hotel::find($id);
        if ($hotel) {
            return response()->json($hotel);
        } else {
            return response()->json(["message" => "Hotel not found"], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $hotel = Hotel::find($id);
        if ($hotel) {
            return response()->json($hotel);
        } else {
            return response()->json(["message" => "Hotel not found"], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $hotel = Hotel::find($id);
        if (!$hotel) {
            return response()->json(["message" => "Hotel not found"], 404);
        }

        $validatedData = $request->validate([
            "hotelName" => "required",
            "addresse" => "required",
            "email" => "required|email",
            "telephone" => "required",
            "prix" => "required|numeric",
            "xof" => "required",
            "images" => "required|url",
        ]);

        $hotel->update($validatedData);
        return response()->json($hotel);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $hotel = Hotel::find($id);
        if ($hotel) {
            $hotel->delete();
            return response()->json(["message" => "Hotel deleted successfully"]);
        } else {
            return response()->json(["message" => "Hotel not found"], 404);
        }
    }
}
