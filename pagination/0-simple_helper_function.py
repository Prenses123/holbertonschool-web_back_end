#!/usr/bin/env python3
"""
This module provides helper utilities for handling pagination parameters.
It contains functions designed to calculate list slice boundaries from
user-specified page numbers and page capacities.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end indexes for a given page and page size.

    This helper function is used to determine the exact range of indices
    to slice from a dataset list based on 1-indexed page numbering.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
