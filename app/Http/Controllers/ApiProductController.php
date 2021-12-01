<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ApiProductController extends Controller
{
    public function add(Request $request)
    {
        $product = new Products();
        $product->nama = $request->nama;
        $product->harga = $request->harga;
        $product->save();
        return response()->json($product->toArray());
    }

    public function get()
    {
        return response()->json(Products::all());
    }

    public function delete($id){
        $product = Products::find($id);
        $product->delete();
        return response()->json('success');
    }

    public function edit(Request $request, $id){
        $product = Products::find($id);
        $product->nama = $request->nama;
        $product->harga = $request->harga;
        $product->save();
        return response()->json('success');
    }
}
