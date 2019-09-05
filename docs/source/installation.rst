Installation
************

Recommended method
==================
We recommend using the `Anaconda Python <https://www.continuum.io/downloads>`_ distribution.
Alternative installation instructions are given at the bottom.

wrfxpy
------
Please follow the instructions on `wrfxpy <https://wrfxpy.readthedocs.io/en/latest/index.html>`_ to run install and run wrfxpy.
Note that this will require a working WPS/WRF installation which is compatible with the MPI on your cluster.


Python and packages
-------------------
Python 2 Anaconda Python distribution should already be downloaded and installed to your home directory. Additional pre-requisites for wrfxctrl are required.

Install pre-requisites: 

::

  conda install flask


wrfxctrl
--------

Next, clone the *wrfxctrl* code:

::
  
  git clone https://github.com/openwfm/wrfxctrl.git

configuration
-------------

An ``etc/conf.json`` file must be created with the keys discussed below.  A template file ``etc/conf-template.json`` is provided as a starting point.

Configure the system directories, host/port, ``wrfxpy`` locations by editing the following keys:

::

  "workspace_path": "wksp"
  "wps_install_path": "path/to/WPS"
  "wrf_install_path": "path/to/WRF"
  "sys_install_path": "/path/to/wrfxpy"
  "wps_geog_path" : "/path/to/wps-geogrid"

Optionally, the *wrfxpy* installation can be connected to a visualization server `wrfxweb <https://github.com/vejmelkam/wrfxweb>`_.  The following keys are all optional (and only used if the postprocessed results of simulations are uploaded).

::

  "host": "<desired_host>",
  "port": "<desired_port>",
  "root": "/path/to/root/",
  "debug": "False",
  "wrfxweb_url" : "htts://url_to_wrfxweb",
  "wrfxpy_path" : "/path/to/wrfxpy/install",

This concludes the ``etc/conf.json`` file.


.. attention::
  You are now ready for your first fire simulation, continue with :doc:`quickstart`.


