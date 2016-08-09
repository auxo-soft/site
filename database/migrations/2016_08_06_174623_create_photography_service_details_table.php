<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhotographyServiceDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photography_service_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('location_id');
            $table->integer('service_type_id');
            $table->integer('candid_phtography_cost');
            $table->integer('cinema_cost');
            $table->integer('studio_photo_cost');
            $table->integer('pre_wedding_shoot');
            $table->string('album');
            $table->integer('exp_yr');
            $table->integer('payment_terms');
            $table->integer('travel_cost');
            $table->string('social_link');
            $table->integer('start_price');
            $table->text('company_profile');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('photography_service_details');
    }
}
