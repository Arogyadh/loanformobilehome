<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('requirement_section', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->text('subtitle');
            $table->timestamps();
        });

        Schema::create('requirement_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('requirement_section_id')->constrained('requirement_section')->onDelete('cascade');
            $table->text('title');
            $table->text('description');
            $table->string('image_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requirement_section');
        Schema::dropIfExists('requirement_items');
    }
};
