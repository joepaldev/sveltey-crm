<?php

namespace App;

class Account extends Model
{
    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }

    public function customers() {
	  return $this->hasMany(Customer::class);

    }
}
